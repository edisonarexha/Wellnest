using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistance;

namespace Application.Appointemnt
{
    public class create
    {
        public class Command : IRequest
        {
              public int Id{get;set;}
        public string FirstName{get;set;}
        public string SecondName{get;set;}
        public int Number{get;set;}
        public string Email {get;set;}

        public DateTime AppointmentDate{get;set;}
        public String Comment{get;set;}
        }
        public class Handler: IRequestHandler<Command>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context=context;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var appointemnts =new BookAppointment{
                Id=request.Id,
            FirstName=request.FirstName,
            SecondName=request.SecondName,
            Number=request.Number,
            Email=request.Email,
            AppointmentDate=request.AppointmentDate,
            Comment=request.Comment,
            
                };
                this.context.BookAppointment.Add(appointemnts);
                var success = await this.context.SaveChangesAsync()>0;

                if(success) return Unit.Value;
                throw new Exception("Problem saving changes");
            }
        }
    }
}
