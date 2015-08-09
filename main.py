import os
import webapp2
import jinja2
from google.appengine.ext import ndb


template_dir = os.path.join(os.path.dirname(__file__),'templates')
jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(template_dir),
                               autoescape = True)

class Info(ndb.Model):
    name = ndb.StringProperty()
    comment = ndb.StringProperty()

class Handler(webapp2.RequestHandler):
    def write(self, *a, **kw):
        self.response.write(*a, **kw)

    def render_str(self, template, **params):
        t = jinja_env.get_template(template)
        return t.render(params)

    def render(self, template, **kw):
        self.write(self.render_str(template, **kw))

class MainHandler(Handler):
    def get(self):
        template = jinja_env.get_template('main_page.html')
        rendered_html = template.render()
        self.response.write(rendered_html)



class Comments(Handler):
    def get(self):
        error = self.request.get('error','')
        thanks = self.request.get('thanks','')
        query = Info.query()
        comments = query.fetch()
        self.render('comment_page.html', comments=comments, 
                     error=error, thanks=thanks)  
    def post(self):
        error = self.request.get('error')
        comment = self.request.get('comment')
        name = self.request.get('name')

        if name.strip() and comment.strip():
            text = Info(name=name, comment=comment, 
                        )
            text.put()
            self.redirect('/comments?thanks=Thanks for the comment!')
        else:
            self.redirect('/comments?error=Please fill out both sections! Thank You!')

     


app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/comments', Comments)
], debug=True)
