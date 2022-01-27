import code
from re import template
from django.forms import SlugField
from .models import *
from django.views.generic import DetailView
from django.shortcuts import render, redirect


class CourseDetailView(DetailView):
    model = Course
    slug_field = "code"
    slug_url_kwarg = "code"


course_detail_view = CourseDetailView.as_view(template_name = 
"../templates/courses/course_detail.html")