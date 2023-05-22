export interface SingleOrderInterface {
    id: number;
    parent_id: number;
    status: string;
    currency: string;
    version: string;
    prices_include_tax: boolean;
    date_created: string;
    date_modified: string;
    discount_total: string;
    discount_tax: string;
    shipping_total: string;
    shipping_tax: string;
    cart_tax: string;
    total: string;
    total_tax: string;
    customer_id: number;
    order_key: string;
    billing: {
        first_name: string;
        last_name: string;
        company: string;
        address_1: string;
        address_2: string;
        city: string;
        state: string;
        postcode: string;
        country: string;
        email: string;
        phone: string;
    };
    shipping: {
        first_name: string;
        last_name: string;
        company: string;
        address_1: string;
        address_2: string;
        city: string;
        state: string;
        postcode: string;
        country: string;
        phone: string;
    };
    payment_method: string;
    payment_method_title: string;
    transaction_id: string;
    customer_ip_address: string;
    customer_user_agent: string;
    created_via: string;
    customer_note: string;
    date_completed: string | null;
    date_paid: string;
    cart_hash: string;
    number: string;
    meta_data: {
        id: number;
        key: string;
        value: any;
    }[];
    line_items: {
        id: number;
        name: string;
        product_id: number;
        variation_id: number;
        quantity: number;
        tax_class: string;
        subtotal: string;
        subtotal_tax: string;
        total: string;
        total_tax: string;
        taxes: {
            id: number;
            total: string;
            subtotal: string;
        }[];
        meta_data: any[];
        sku: string;
        price: number;
        image: {
            id: string;
            src: string;
        };
        parent_name: string | null;
    }[];
    tax_lines: {
        id: number;
        rate_code: string;
        rate_id: number;
        label: string;
        compound: boolean;
        tax_total: string;
        shipping_tax_total: string;
        rate_percent: number;
        meta_data: any[];
    }[];
    shipping_lines: {
        id: number;
        method_title: string;
        method_id: string;
        instance_id: string;
        total: string;
        total_tax: string;
        taxes: {
            id: number;
            total: string;
            subtotal: string;
        }[];
        meta_data: {
            id: number;
            key: string;
            value: any;
            display_key: string;
            display_value: string;
        }[];
    }[];
    fee_lines: any[];
    coupon_lines: any[];
    refunds: any[];
    payment_url: string;
    is_editable: boolean;
    needs_payment: boolean;
    needs_processing: boolean;
    date_created_gmt: string;
    date_modified_gmt: string;
    date_completed_gmt: string | null;
    date_paid_gmt: string;
    summary_page: string;
    currency_symbol: string;
    _links: {
        self: {
            href: string;
        }[];
        collection: {
            href: string;
        }[];
    };
}


export type GetSingleOrder = SingleOrderInterface