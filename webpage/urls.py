from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('carta/', views.carta, name='carta'),
    path('locales/', views.locales, name='locales'),
    path('login/', views.login_view, name='login'), 
    path('registro/', views.registro, name='registro'),
    path('reservas/', views.reservas, name='reservas'),
    path('productos/', views.producto_list, name='producto_list'),
    path('producto/<int:pk>/', views.producto_detail, name='producto_detail'),
    path('producto/new/', views.producto_create, name='producto_create'),
    path('producto/<int:pk>/edit/', views.producto_update, name='producto_update'),
    path('producto/<int:pk>/delete/', views.producto_delete, name='producto_delete'),
]
