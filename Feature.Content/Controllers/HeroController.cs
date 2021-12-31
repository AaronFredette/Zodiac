using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Constellation.Foundation.ModelMapping;
using Constellation.Foundation.Mvc;
using Constellation.Foundation.Mvc.Patterns.Controllers;
using Feature.Content.Models;

namespace Feature.Content.Controllers
{
    public class HeroController : DatasourceRenderingController<HeroModel>
    {
        public HeroController(IViewPathResolver viewPathResolver, IModelMapper modelMapper) : base(viewPathResolver,
            modelMapper)
        {
        }

    }
}
