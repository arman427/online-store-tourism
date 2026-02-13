export interface BreadcrumbItem {
   text: string | undefined;
}

export function getBreadcrumbs(pathname: string): BreadcrumbItem[] {
   const segments = pathname.split('/').filter(Boolean);
   const breadcrumbs: BreadcrumbItem[] = [
      { text: 'Главная' }
   ]

   segments.forEach((segment) => {
      const text = formatSegmentText(segment);
      breadcrumbs.push({ text: text });
   });


   if (breadcrumbs.length > 1) return breadcrumbs;
   return [];
}

function formatSegmentText(segment: string): string {
   const staticRouteText: Record<string, string> = {
      'about': 'О нас',
      'catalog': 'Каталог',
      'help': 'Где нас найти?',
      'product': 'Тур'
   }
   return staticRouteText[segment] || segment;
}