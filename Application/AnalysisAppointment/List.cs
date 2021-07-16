using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace Application.AnalysisAppointment
{
    public class List
    {
        public class Query : IRequest<List<AnalysisApp>> { }
        public class Handler : IRequestHandler<Query, List<AnalysisApp>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<AnalysisApp>> Handle(Query request, CancellationToken cancellationToken)
            {
                var analysisapp = await this._context.AnalysisApp.ToListAsync();

                return analysisapp;
            }
        }
    }
}