import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } },
)

export async function GET() {
  const { data, error } = await supabase
    .from('tributes')
    .select('id, name, message, created_at')
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error: 'Unable to load tributes.' }, { status: 500 })
  return NextResponse.json(data)
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const name = typeof body?.name === 'string' ? body.name.trim() : ''
  const message = typeof body?.message === 'string' ? body.message.trim() : ''

  if (!message || message.length > 1000 || name.length > 120) {
    return NextResponse.json({ error: 'Please check your tribute and try again.' }, { status: 400 })
  }

  const { data, error } = await supabase
    .from('tributes')
    .insert({ name: name || 'A friend', message })
    .select('id, name, message, created_at')
    .single()

  if (error) return NextResponse.json({ error: 'Unable to save your tribute.' }, { status: 500 })
  return NextResponse.json(data, { status: 201 })
}
