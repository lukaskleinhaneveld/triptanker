using OpenDataRdwNL.Sdk.Extensions;
using System.Web.Http;
using System.Web.Http.Cors;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddOpenDataRdwNlServices(opt =>
{
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
