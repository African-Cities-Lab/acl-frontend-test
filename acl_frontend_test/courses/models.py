from autoslug import AutoSlugField
from django.db import models
from django.utils.text import slugify
from taggit.managers import TaggableManager

INSTRUCTOR_NAME_MAX_LENGTH = 100
INSTRUCTOR_BIO_MAX_LENGTH = 1000
ORGANIZATION_NAME_MAX_LENGTH = 100
ORGANIZATION_ACRONYM_MAX_LENGTH = 10
COURSE_TITLE_MAX_LENGTH = 100
COURSE_SHORT_DESCRIPTION_MAX_LENGTH = 500
COURSE_FULL_DESCRIPTION_MAX_LENGTH = 1000


class Organization(models.Model):
    name = models.CharField(max_length=ORGANIZATION_NAME_MAX_LENGTH)
    acronym = models.CharField(max_length=ORGANIZATION_ACRONYM_MAX_LENGTH)
    image = models.ImageField(upload_to="organization_images")


class Instructor(models.Model):
    name = models.CharField(max_length=INSTRUCTOR_NAME_MAX_LENGTH)
    slug = AutoSlugField(populate_from="name", slugify=slugify)
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE)
    bio = models.CharField(max_length=INSTRUCTOR_BIO_MAX_LENGTH)
    profile_picture = models.ImageField(upload_to="profile_pictures")


class Course(models.Model):
    title = models.CharField(max_length=COURSE_TITLE_MAX_LENGTH)
    short_description = models.TextField(max_length=COURSE_SHORT_DESCRIPTION_MAX_LENGTH)
    full_description = models.TextField(max_length=COURSE_FULL_DESCRIPTION_MAX_LENGTH)
    image = models.ImageField(upload_to="course_images")
    categories = TaggableManager()
    instructors = models.ManyToManyField(Instructor)

    def get_organizations(self):
        return [instructor.organization for instructor in self.instructors.all()]
