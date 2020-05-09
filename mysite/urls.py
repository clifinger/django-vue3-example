from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path("",
         TemplateView.as_view(template_name="application.html"),
         name="app",
         ),
]
