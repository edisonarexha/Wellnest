using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Diseases;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DiseasesPController : ControllerBase
    {
        private readonly IMediator mediator;
        public DiseasesPController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Disease>>> List(){
            return await this.mediator.Send(new List.Query());
        }
    }
}