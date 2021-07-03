using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistance;
using Microsoft.EntityFrameworkCore;


namespace Application.RecoveryPatient

{
    public class List
    {
        public class Query: IRequest<List<RecoveredPatiensCovid19>>{ }
        public class Handler: IRequestHandler<Query,List<RecoveredPatiensCovid19>>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context=context;
            }
            public async Task<List<RecoveredPatiensCovid19>> Handle(Query request, CancellationToken cancellationToken)
            {
                var Recovery = await this.context.RecoveredPatiensCovid19.ToListAsync();
                return Recovery;
            }

        }

      
    }   
}