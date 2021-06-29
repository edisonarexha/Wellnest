using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistance;
using Microsoft.EntityFrameworkCore;

namespace Application.Diseases
{
    public class List
    {
        public class Query : IRequest<List<Disease>> { }
        public class Handler : IRequestHandler<Query, List<Disease>>
        {
            private readonly DataContext context;

            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<List<Disease>> Handle(Query request, CancellationToken cancellationToken)
            {
                var diseases = await this.context.Diseases.ToListAsync();

                return diseases;
            }
        }
    }
}