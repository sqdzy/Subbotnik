from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.core import serializers
from .models import Marker
from .models import User
from django.contrib.auth import logout
from django.contrib import messages
def index(request):
    return render(request, 'index.html')

def map(request):
    if request.method == 'POST':
        try:
            userName = request.session.get('user')
            user = User.objects.get(id=userName)
        except:
            return redirect('auth')
        markerName = request.POST.get('markerName')
        description = request.POST.get('description')
        pollutionLevel = request.POST.get('pollutionLevel')
        latitude = request.POST.get('latitude')
        longitude = request.POST.get('longitude')
        photo = request.FILES.get('photo')
        marker = Marker(markerName=markerName, description=description, pollutionLevel=pollutionLevel, photo=photo, latitude = latitude, longitude = longitude, user=user)
        marker.save()
    return render(request, 'map.html')

def auth(request):
    if request.method == 'POST':
        userName = request.POST.get('userName')
        userPassword = request.POST.get('userPassword')
        try:
            user = User.objects.get(userName=userName)
            if user.userPassword == userPassword:
                request.session['user'] = user.id
                return redirect('map')
            else:
                return render(request, 'auth.html', {'error': 'Неверный логин или пароль'})
        except User.DoesNotExist:
            user = User.objects.create(userName=userName, userPassword=userPassword)
            request.session['user'] = user.id
            return redirect('map')
    else:
        return render(request, 'auth.html')
def get_markers(request):
    markers = serializers.serialize('json', Marker.objects.all())
    return JsonResponse(markers, safe=False)


def logout_view(request):
    logout(request)
    return redirect('auth')