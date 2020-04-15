using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using WebApi.Services;

namespace WebApi.Controllers
{
    [Authorize]
    [Route("[controller]")]
    [ApiController]
    public class HumansController : ControllerBase
    {
        private readonly IHumanService _humanService;

        public HumansController(IHumanService humanService)
        {
            _humanService = humanService;
        }

        [HttpGet("get")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _humanService.GetAsync());
        }
    }
}