import { NextResponse } from 'next/server'
import { databaseTables, supabase } from '../../../lib/clients'

export async function GET() {
  try {
    await supabase
      .from(databaseTables.feedback)
      .delete()
      .eq('email', 'keep-alive@ibeanuhillary.com')

    await supabase.from(databaseTables.feedback).insert({
      description: 'supabase database is alive',
      email: 'keep-alive@ibeanuhillary.com',
    })

    return NextResponse.json({ message: 'supabase database is alive... 💪' })
  } catch (error) {
    console.error('Error pinging endpoint:', error)
    return NextResponse.json({ message: 'Error pinging endpoint' }, { status: 500 })
  }
}
