import React from 'react';
import clsx from "clsx";


interface TenantLayoutPrios {
    children: React.ReactNode;
    params: {
        subdomain: string
    };
}

interface Tenant {
    subdomain: string;

    [key: string]: any; // Для дополнительных свойств, если они есть
}

const tenants: Record<string, Tenant> = { //Вместо константы тянем данные с ручки
    tenant1: {subdomain: "tenant1", name: "Tenant 1", theme: "light"},
    tenant2: {subdomain: "tenant2", name: "Tenant 2", theme: "dark"},
};

export async function getTenantBySubdomain(subdomain: string): Promise<Tenant | null> {
    return tenants[subdomain] || null;
}

export default async function TenantLayout({children, params}: TenantLayoutPrios) {
    const tenantData = await getTenantBySubdomain(params.subdomain)
    return (
        <div className={clsx(tenantData?.theme)}>
            <p>{tenantData?.subdomain}</p>
            <div>{children}</div>
        </div>
    );
}
