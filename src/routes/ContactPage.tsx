import { Footer } from '@/components/footer'
import { Header } from '@/components/layout'
import contact from '@/data/contact.json'
import footerData from '@/data/footer.json'
import headerData from '@/data/header.json'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import React, { useState } from 'react'

const ContactPage: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    setStatus('submitting')

    try {
      if (contact.formspreeFormId) {
        const res = await fetch(`https://formspree.io/f/${contact.formspreeFormId}`, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: formData,
        })
        if (res.ok) {
          setStatus('success')
          form.reset()
        } else {
          setStatus('error')
        }
      } else {
        console.log('Contact form data', Object.fromEntries(formData as any))
        setStatus('success')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-ww-gray-50 flex flex-col">
      <Header data={headerData} />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-14 md:px-40 space-y-8">
        {/* Map */}
        <div className="w-full overflow-hidden rounded-lg border border-ww-gray-200">
          <div className="relative w-full" style={{ paddingTop: '40%' }}>
            <iframe
              title="White Wings Location"
              src={contact.mapEmbedUrl}
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Map showing our office location"
            />
          </div>
        </div>

        {/* Bottom split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Connect with */}
          <section className="bg-white rounded-lg shadow-sm border border-ww-gray-200 p-6">
            <h2 className="text-lg font-semibold text-ww-gray-900 mb-4">Connect with</h2>
            <div className="space-y-10 text-ww-gray-800">
              <div>
                <div className="text-sm font-medium text-ww-gray-600">E-mail</div>
                <a href={`mailto:${contact.email}`} className="text-ww-blue-700 underline">{contact.email}</a>
              </div>
              <div>
                <div className="text-sm font-medium text-ww-gray-600">Office Address</div>
                <p className="whitespace-pre-wrap">{contact.address}</p>
              </div>
              <div>
                <div className="text-sm font-medium text-ww-gray-600">Phone</div>
                <a href={`tel:${contact.phone}`} className="text-ww-blue-700 underline">{contact.phone}</a>
              </div>
              <div>
                <div className="text-sm font-medium text-ww-gray-600">Social media</div>
                <ul className="flex flex-wrap items-center gap-6">
                  {contact.socials.map((s, i) => {
                    const key = s.label.toLowerCase().replace(/\s+/g, '')
                    const iconMap: Record<string, React.ReactNode> = {
                      facebook: <Facebook className="h-5 w-5" />,
                      instagram: <Instagram className="h-5 w-5" />,
                      linkedin: <Linkedin className="h-5 w-5" />,
                      youtube: <Youtube className="h-5 w-5" />,
                    }
                    return (
                      <li key={i} className="flex items-center gap-2 text-ww-gray-800">
                        <span aria-hidden>{iconMap[key]}</span>
                        <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-ww-blue-700">
                          {s.label}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </section>

          {/* Right: Form */}
          <section className="bg-white rounded-lg shadow-sm border border-ww-gray-200 p-6">
            <h2 className="text-lg font-semibold text-ww-gray-900 mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-ww-gray-700 mb-1">Name</label>
                <input name="name" placeholder="Amitabh" required className="w-full rounded-md border border-ww-gray-300 px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm text-ww-gray-700 mb-1">Surname</label>
                <input name="surname" placeholder="Bachchan" className="w-full rounded-md border border-ww-gray-300 px-3 py-2" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-ww-gray-700 mb-1">Subject</label>
                <input name="subject" placeholder="Torrance Properties" className="w-full rounded-md border border-ww-gray-300 px-3 py-2" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-ww-gray-700 mb-1">Email</label>
                <input type="email" name="email" placeholder="amitabh@bachan.com" required className="w-full rounded-md border border-ww-gray-300 px-3 py-2" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-ww-gray-700 mb-1">Type your message</label>
                <textarea name="message" rows={5} placeholder="I want to know about the properties" className="w-full rounded-md border border-ww-gray-300 px-3 py-2" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-ww-gray-500 mb-1">(Optional)</label>
                <input name="optional" placeholder="Value" className="w-full rounded-md border border-ww-gray-300 px-3 py-2" />
              </div>
              <div className="md:col-span-2 flex items-center gap-3">
                <button type="submit" disabled={status==='submitting'} className="inline-flex items-center justify-center rounded-md bg-ww-blue-800 px-6 py-2 text-white hover:bg-ww-blue-900 disabled:opacity-60">
                  {status==='submitting' ? 'Submitting…' : 'Submit'}
                </button>
                {status==='success' && <span className="text-ww-green-600 text-sm">Thanks! We will get back to you.</span>}
                {status==='error' && <span className="text-red-600 text-sm">Something went wrong. Please try again.</span>}
              </div>
            </form>
            {!contact.formspreeFormId && (
              <p className="text-xs text-ww-gray-500 mt-3">To enable email forwarding, create a free form at Formspree.io and add its form ID in <code>src/data/contact.json</code> as <code>formspreeFormId</code>.</p>
            )}
          </section>
        </div>
      </main>
      <Footer data={footerData} onNewsletterSubscribe={async () => {}} />
    </div>
  )
}

export default ContactPage


