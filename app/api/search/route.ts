import { NextRequest, NextResponse } from 'next/server'
import supabase from '@/lib/supabase'

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const q = searchParams.get('q')

    if (!q) return NextResponse.json({ error: 'Query parameter q is required' }, { status: 400 })

    const { data, error } = await supabase
        .from('products')
        .select('*')
        .or(`name.ilike.%${q}%,brand.ilike.%${q}%`)

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    return NextResponse.json({ products: data })
}