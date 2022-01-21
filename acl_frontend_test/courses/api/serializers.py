from rest_framework import serializers
from taggit_serializer.serializers import TaggitSerializer, TagListSerializerField

from acl_frontend_test.courses.models import Course, Instructor, Organization


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = ["name", "acronym", "image", "url"]
        extra_kwargs = {
            "url": {"view_name": "api:organization-detail", "lookup_field": "acronym"}
        }


class InstructorSerializer(serializers.ModelSerializer):
    organization = OrganizationSerializer()

    class Meta:
        model = Instructor
        fields = ["name", "organization", "bio", "profile_picture", "url"]
        extra_kwargs = {
            "url": {"view_name": "api:instructor-detail", "lookup_field": "slug"}
        }


class CourseSerializer(TaggitSerializer, serializers.ModelSerializer):
    categories = TagListSerializerField()
    instructors = InstructorSerializer(many=True)
    organizations = OrganizationSerializer(source="get_organizations", many=True)

    class Meta:
        model = Course
        fields = [
            "title",
            "code",
            "short_description",
            "full_description",
            "image",
            "categories",
            "instructors",
            "organizations",
            "url",
        ]
        extra_kwargs = {
            "url": {"view_name": "api:course-detail", "lookup_field": "code"}
        }
