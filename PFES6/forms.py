from django import forms
from .models import Users
from django.core.exceptions import ValidationError


class UsersForm(forms.ModelForm):
    class Meta():
        model = Users
        fields = ('email', 'password')


class UserRegistrationForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)
    password_confirm = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = Users
        fields = ['nom', 'prenom', 'email', 'password', 'role', 'picture']

    def clean_email(self):
        email = self.cleaned_data.get('email')
        # Check if email is already registered
        if Users.objects.filter(email=email).exists():
            raise ValidationError("User already registered. Please login.")
        return email

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get("password")
        password_confirm = cleaned_data.get("password_confirm")

        if password != password_confirm:
            raise forms.ValidationError("Passwords do not match")

        return cleaned_data
