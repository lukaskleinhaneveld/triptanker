using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OpenDataRdwNL.Models.ServiceResults;
using OpenDataRdwNL.Sdk.Services.Contracts;

namespace Triptanker.Server.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    [Produces("application/json")]
    public class RDWController : ControllerBase
    {
        private readonly IOpenDataRdwEnService _dataRdwEnService;

        public RDWController(IOpenDataRdwEnService dataRdwEnService)
        {
            _dataRdwEnService = dataRdwEnService;
        }

        [HttpGet("[action]")]
        [ProducesResponseType(typeof(List<CarDetailEnServiceResult>), 200)]
        public async Task<IActionResult> CarDetail([FromQuery] string licensePlate)
        {
            var models = await _dataRdwEnService.GetCarDetailByLicensePlate(licensePlate.ToUpper());
            return Ok(models);
        }
    }
}
