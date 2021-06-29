using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Allergies;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AllergieController : ControllerBase
    {
        private readonly IMediator mediator;

        public AllergieController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpGet]

        public async Task<ActionResult<List<Allergy>>> List()
        {
            return await this.mediator.Send(new List.Query());
        }

        [HttpPost]

        public async Task<ActionResult<Unit>> Create(Create.Command command){
            
            return await mediator.Send(command);
        }
    }
}