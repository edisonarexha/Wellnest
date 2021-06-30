using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Persistance;
using System;

namespace Wellnest_API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host=CreateHostBuilder(args).Build();
            using (var scope=host.Services.CreateScope()){
                var services=scope.ServiceProvider;
                try{
                    var context =services.GetRequiredService<DataContext>();
                    context.Database.Migrate();
                    Seed.SeedData(context);
                }catch(Exception e){
                    var logger=services.GetRequiredService<ILogger<Program>>();
                    logger.LogError(e, "An error occurred during migration");
                }
            }
            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
