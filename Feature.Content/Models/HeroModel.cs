using System.Web;
using Constellation.Foundation.ModelMapping.FieldModels;

namespace Feature.Content.Models
{
    public class HeroModel
    {
        public HtmlString HeroDescription { get; set; }

        public ImageModel Image { get; set; }

        public GeneralLinkModel HeroLink { get; set; }
    }
}
