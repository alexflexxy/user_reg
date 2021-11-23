from django.urls import path
from reg_app import views


app_name = 'reg_app'

# Be careful setting the name to just /login use userlogin instead!

urlpatterns = [
    path('register/', views.register,name='register'),
    path('user_login/', views.user_login, name='user_login'),
    path('dice_game/', views.dice_game, name='dice_game'),
]