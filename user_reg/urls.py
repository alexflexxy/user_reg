from django.contrib import admin
from django.urls import path, include
from reg_app import views

urlpatterns = [
    path('', views.index, name='index'),
    path('special/',views.special,name='special'),
    path('logout/', views.user_logout, name='logout'),
    path('reg_app/', include('reg_app.urls')),
    path('admin/', admin.site.urls),
]