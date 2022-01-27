from django.urls import path

from acl_frontend_test.courses.views import (
    course_detail_view
)

app_name = "courses"
urlpatterns = [
    path("<str:code>/", view=course_detail_view, name="detail"),
]
