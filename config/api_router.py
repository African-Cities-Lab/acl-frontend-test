from django.conf import settings
from rest_framework.routers import DefaultRouter, SimpleRouter

from acl_frontend_test.courses.api.views import (
    CourseViewSet,
    InstructorViewSet,
    OrganizationViewSet,
)
from acl_frontend_test.users.api.views import UserViewSet

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register("organizations", OrganizationViewSet)
router.register("instructors", InstructorViewSet)
router.register("courses", CourseViewSet)
router.register("users", UserViewSet)


app_name = "api"
urlpatterns = router.urls
