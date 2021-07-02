using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistance;
using Microsoft.EntityFrameworkCore;


namespace Application.Infected

{
    public class List
    {
        public class Query: IRequest<List<CovidInfected>>{ }
        public class Handler: IRequestHandler<Query,List<CovidInfected>>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context=context;
            }
            public async Task<List<CovidInfected>> Handle(Query request, CancellationToken cancellationToken)
            {
                var infecteds = await this.context.CovidInfected.ToListAsync();
                return infecteds;
            }

        }

      
    }   
}