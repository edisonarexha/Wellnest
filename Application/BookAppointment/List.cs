using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistance;
using Microsoft.EntityFrameworkCore;


namespace Application.Appointemnt

{
    public class List
    {
        public class Query: IRequest<List<BookAppointment>>{ }
        public class Handler: IRequestHandler<Query,List<BookAppointment>>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context=context;
            }
            public async Task<List<BookAppointment>> Handle(Query request, CancellationToken cancellationToken)
            {
                var appointments = await this.context.BookAppointment.ToListAsync();
                return appointments;
            }

        }

      
    }   
}