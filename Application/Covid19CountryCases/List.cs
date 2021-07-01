using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistance;
using Microsoft.EntityFrameworkCore;


namespace Application.Covid19CountryCases

{
    public class List
    {
        public class Query: IRequest<List<Covid19CasesCountry>>{ }
        public class Handler: IRequestHandler<Query,List<Covid19CasesCountry>>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context=context;
            }
            public async Task<List<Covid19CasesCountry>> Handle(Query request, CancellationToken cancellationToken)
            {
                var covid = await this.context.Covid19CasesCountry.ToListAsync();
                return covid;
            }

        }

      
    }   
}