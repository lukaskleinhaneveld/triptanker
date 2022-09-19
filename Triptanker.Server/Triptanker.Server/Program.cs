using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using OpenDataRdwNL.Sdk.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddOpenDataRdwNlServices(opt =>
{
    //opt.AppToken = builder.Configuration["triptanker:RDWAPIkey"];
    opt.AppToken = "wROHRAFVQeW6zTZjZEWh3SSJf";
    opt.OpenDataRdwNlServiceAddress = "https://opendata.rdw.nl";
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
    options.AddDefaultPolicy(builder =>
        builder.WithOrigins("http://localhost:3000", "https://opendata.rdw.nl")
        .AllowAnyHeader()
        .AllowAnyMethod()
));


var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
