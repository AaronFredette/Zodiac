using Constellation.Feature.Navigation.Repositories;
using Constellation.Foundation.Mvc;
using Sitecore.Data.Items;

namespace Feature.Navigation.Controllers
{
    public class BreadcrumbController : ConventionController
    {
        public BreadcrumbController(IBreadcrumbNavigationRepository repository, IViewPathResolver viewPathResolver) : base (viewPathResolver)
        {
            this.Repository = repository;
        }

        public IBreadcrumbNavigationRepository Repository { get; set; }


        protected override object GetModel(Item datasource, Item contextItem)
        {
            return Repository.GetNavigation(contextItem,
                Sitecore.Context.Site.SiteInfo);
        }

       

        protected string GetViewName()
        {
            return "~/Areas/ZodiacPrime/Views/Navigation/Breadcrumb.cshtml";
        }
    }
}