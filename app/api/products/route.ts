import { NextRequest, NextResponse } from 'next/server'
import supabase from '@/lib/supabase'

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const skin_type = searchParams.get('skin_type')

    let query = supabase.from('products').select('*')

    if (category) {
        query = query.eq('category', category)
    }

    if (skin_type) {
        query = query.contains('skin_type', [skin_type])
    }

    const { data, error } = await query

    console.log('ERROR:', error)
    console.log('DATA:', data)

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    const products = data.map((product) => ({
        ...product,
        buy_links: {
            amazon: `https://www.amazon.ca/s?k=${encodeURIComponent(product.name)}`,
            sephora: `https://www.sephora.com/search?keyword=${encodeURIComponent(product.name)}`,
            ulta: `https://www.ulta.com/search?search=${encodeURIComponent(product.name)}`
        }
    }))

    return NextResponse.json({ products })
}