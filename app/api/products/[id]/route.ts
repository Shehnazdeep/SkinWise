import { NextRequest, NextResponse } from 'next/server'
import supabase from '@/lib/supabase'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', params.id)
        .single()

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    const product = {
        ...data,
        buy_links: {
            amazon: `https://www.amazon.ca/s?k=${encodeURIComponent(data.name)}`,
            sephora: `https://www.sephora.com/search?keyword=${encodeURIComponent(data.name)}`,
            ulta: `https://www.ulta.com/search?search=${encodeURIComponent(data.name)}`
        }
    }

    return NextResponse.json({ product })
}