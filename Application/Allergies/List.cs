using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace Application.Allergies
{
    public class List
    {
        public class Query : IRequest<List<Allergy>> { }
        public class Handler : IRequestHandler<Query, List<Allergy>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Allergy>> Handle(Query request, CancellationToken cancellationToken)
            {
                var allergies = await this._context.Allergy.ToListAsync();

                return allergies;
            }
        }
    }
}