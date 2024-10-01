export interface CoverageTypeResponse {
    data: {
        product_identifier: string;
        premium: {
            annual_plan: {
                receipt_amount: number;
                annual_gross_premium: number;
                annual_net_premium: number;
                annual_taxes: number;
                first_receipt_amount: number;
                annual_discounted_gross_premium: number;
                annual_discounted_net_premium: number;
                annual_discounted_taxes: number;
            };
            monthly_plan: number;
            biannual_plan: number;
            quarterly_plan: number;
        };
        coverage_types: CoverageType[];
    };
}

export interface CoverageType {
        title: {
            en: string;
            es: string;
        };
        description: {
            en: string;
            es: string;
        };
        selected: boolean;
        identifier: string;
        premium: {
            monthly_plan: number;
            annual_plan: {
                receipt_amount: number;
                annual_gross_premium: number;
                annual_net_premium: number;
                annual_taxes: number;
                first_receipt_amount: number;
                annual_discounted_gross_premium: number;
                annual_discounted_net_premium: number;
                annual_discounted_taxes: number;
            };
            biannual_plan: number;
            quarterly_plan: number;
        }
        order: number;
}