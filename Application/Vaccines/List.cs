using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace Application.Vaccines
{
    public class List
    {
        public class Query : IRequest<List<Vaccine>> { }
        public class Handler : IRequestHandler<Query, List<Vaccine>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Vaccine>> Handle(Query request, CancellationToken cancellationToken)
            {
                var vaccine = await this._context.Vaccine.ToListAsync();

                return vaccine;
            }
        }
    }
}