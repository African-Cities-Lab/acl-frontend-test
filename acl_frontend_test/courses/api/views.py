from re import template

from rest_framework import viewsets
from rest_framework.response import Response

from acl_frontend_test.courses.api.serializers import (
    CourseSerializer,
    InstructorSerializer,
    OrganizationSerializer,
)
from acl_frontend_test.courses.models import Course, Instructor, Organization


class OrganizationViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = OrganizationSerializer
    queryset = Organization.objects.all()
    lookup_field = "acronym"


class InstructorViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = InstructorSerializer
    queryset = Instructor.objects.all()
    lookup_field = "slug"


class CourseViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()
    lookup_field = "code"

    def get_queryset(self):
        queryset = Course.objects.all()
        category = self.request.query_params.get("category")
        if category is not None:
            queryset = queryset.filter(categories__name__in=[category])

        return queryset
