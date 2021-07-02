using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Application.Infected;
namespace Api.Controllers

{
    [Route("api/[controller]")]
    [ApiController]
    public class CovidInfectedController : ControllerBase
    {
        private readonly IMediator mediator;
        public CovidInfectedController(IMediator mediator)
        {
            this.mediator=mediator;
        }

  

        [HttpGet]
        public async Task<ActionResult<List<CovidInfected>>> List()
        {
                return await this.mediator.Send(new List.Query());

        }
        [HttpPost]
        public async Task<ActionResult<Unit>> Create(create.Command command)
                {
                    return await this.mediator.Send(command);
                }

        [HttpPut("{Id}")]
        public async Task<ActionResult<Unit>> Edit(int id,Edit.Command command)
        {
            command.Id=id;
            return await this.mediator.Send(command);
        }

        [HttpDelete("{Id}")]
        public async Task<ActionResult<Unit>> Delete(int id){
            return await this.mediator.Send(new Delete.Command{Id=id});
        }

    }    
}