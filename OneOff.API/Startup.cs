using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(OneOff.API.Startup))]

namespace OneOff.API
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);
            ConfigureAuth(app);
            
        }
    }
}
