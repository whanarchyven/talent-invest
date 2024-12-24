// middleware.ts
import { NextResponse } from 'next/server';
import subdomains from './subdomains.json';
//Заместо импорта jsona тянем данные с ручки
export const config = {
    matcher: [
        "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
    ],
};

export default async function middleware(req: Request) {
    const url = new URL(req.url);
    const hostname = req.headers.get("host") || "";

    // Определяем допустимые домены (локальный хост и домен для продакшена)
    const allowedDomains = ["localhost:3000", "aicharm.com"];

    // Проверяем, существует ли hostname в допустимых доменах
    const isAllowedDomain = allowedDomains.some(domain => hostname.includes(domain));

    // Извлекаем возможный поддомен из URL
    const subdomain = hostname.split('.')[0];

    // Если мы находимся на разрешённом домене и это не поддомен, разрешаем запрос
    if (isAllowedDomain && !subdomains.some(d => d.subdomain === subdomain)) {
        return NextResponse.next();
    }

    const subdomainData = subdomains.find(d => d.subdomain === subdomain);

    if (subdomainData) {
        // Переписываем URL на динамический маршрут, основанный на поддомене
        return NextResponse.rewrite(new URL(`/${subdomain}${url.pathname}`, req.url));
    }

    return new Response(null, { status: 404 });
}
