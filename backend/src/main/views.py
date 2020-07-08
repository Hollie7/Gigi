from datetime import datetime
from flask import render_template, session, redirect, url_for, flash, request, current_app, g
from flask import abort
from flask import Markup
from flask_login import current_user, login_required
from . import main
from .. import db
from ..decorators import admin_required

@main.route('/', methods=['GET', 'POST'])
# @login_required
def index():
    return render_template('index.html')

