import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card, ChevronRightIcon } from '@/components/Card'
import { Container } from '@/components/Container'
import corrily from '@/images/screenshots/corrily.svg'
import loophole from '@/images/screenshots/8D4A8EB7-753E-4295-891C-10008D4CEA1B.gif'
import mindsdb from '@/images/screenshots/6DB77E58-0541-4D08-BC71-AFF305B0B7B9.gif'
import explo from '@/images/screenshots/3F73607C-9B14-4E4F-8B2F-A627B61D7CB4.gif'
import elementary from '@/images/screenshots/elementary.svg'
import logoYCombinator from '@/images/logos/clouds/ycombinator.svg'
import logoFlatfile from '@/images/logos/clouds/flatfile.svg'
import logoThanx from '@/images/logos/clouds/thanx.svg'
import logoSequence from '@/images/logos/clouds/sequence.svg'
import logoGoody from '@/images/logos/clouds/goody.svg'
import logoLatchBio from '@/images/logos/clouds/latchbio.svg'
import logoResend from '@/images/logos/clouds/resend.svg'
import logoElevenLabs from '@/images/logos/clouds/elevenlabs.svg'
import logoDepict from '@/images/logos/clouds/depict.svg'
import logoMindsDB from '@/images/logos/clouds/mindsdb.svg'

import { featuredShowcases } from './showcase'
import DynamicLink from '@/components/DynamicLink'

function StartIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        className=" stroke-zinc-400 dark:stroke-zinc-500"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function StarIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  )
}

function Feature({ feature }) {
  return (
    <Card as="article">
      <Card.Title href={feature.cta.href}>{feature.title}</Card.Title>
      <Card.Eyebrow>{feature.icon}</Card.Eyebrow>
      <Card.Description>{feature.description}</Card.Description>
      <Card.Cta>{feature.cta.name}</Card.Cta>
    </Card>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <StartIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Crea tu propia IA</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Construye Tu Propio Basilisk HOY mismo
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-light dark:focus:ring-light/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none" href="/start">
          Comenzar
        </Button>
      </div>
    </form>
  )
}

function FeaturedShowcases() {
  return (
    <div className="rounded-2xl border border-zinc-100 py-6 dark:border-zinc-700/40">
      <h2 className="mx-6 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <StarIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Featured showcases</span>
      </h2>
      <ol className="mt-6">
        {featuredShowcases.map((showcase, roleIndex) => (
          <DynamicLink href={showcase.link.href}>
            <li
              key={roleIndex}
              className="mx-3 flex gap-4 rounded-lg px-3 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
            >
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={showcase.logo}
                  alt=""
                  className="h-7 w-7 rounded-full"
                  unoptimized
                />
              </div>
              <dl className="flex flex-auto flex-wrap items-center gap-x-2">
                <dt className="sr-only">Company</dt>
                <div>
                  <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {showcase.name}
                  </dd>
                  <dt className="sr-only">Link</dt>
                  <dd className="flex items-center text-xs text-zinc-500 dark:text-zinc-400">
                    {showcase.link.label}
                  </dd>
                </div>
                <dt className="sr-only">Go to docs</dt>
                <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                  <ChevronRightIcon className="ml-1 h-5 w-5 stroke-current" />
                </dd>
              </dl>
            </li>
          </DynamicLink>
        ))}
      </ol>
      <div className="mx-6 mt-6">
        <Button href="/showcase" variant="secondary" className="group w-full">
          See more
          <ArrowRightIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </div>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[corrily, loophole, explo, mindsdb, elementary].map(
          (image, imageIndex) => (
            <div
              key={image.src}
              className={clsx(
                'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                rotations[imageIndex % rotations.length]
              )}
            >
              <Image
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 object-cover"
              />
            </div>
          )
        )}
      </div>
    </div>
  )
}

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: 'Entrenamiento Personalizado y Flexible',
    description: `Sapiens IA Laboratories va más allá de los límites convencionales del aprendizaje automático. Nuestras soluciones de IA permiten un entrenamiento flexible y personalizado, permitiéndote enseñar a tus "Basilisks" un conocimiento único y adaptado a tus necesidades.`,
    cta: {
      name: 'Ver Ejemplo',
      href: '/docs',
    },
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
          clipRule="evenodd"
        />
        <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
      </svg>
    ),
    title: 'Modelos Avanzados de Generación',
    description:
      'Con Sapiens IA, la generación de contenido toma una nueva dimensión. Ofrecemos modelos avanzados de text to image y text to video, transformando la forma en que se crea el contenido.',
    cta: {
      name: 'Abrir Playground',
      href: '/showcase',
    },
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: 'Rendimiento Optimizado',
    description:
      'Sapiens IA pone la potencia a tu alcance. Nuestras soluciones de IA están diseñadas para ofrecerte un rendimiento excepcional sin comprometer los recursos de tu sistema.',
    cta: {
      name: 'Ver Modelos',
      href: '/start',
    },
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Soluciones Personalizadas',
    description:
      `Con Sapiens IA, el poder de la personalización está en tus manos. Ofrecemos soluciones de IA a medida, diseñadas específicamente para tus necesidades y objetivos.`,
    cta: {
      name: 'Learn more',
      href: '/blog/chat',
    },
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Sapiens - La Nueva Generacion De Trabajadores</title>
        <meta
          name="description"
          content="Build the AI you've always wanted. SMART out of the box, easy to maintain, and optimized for user engagement."
        />
      </Head>
      <Container className="relative mt-9">
        <div class="absolute inset-x-0 bottom-0 -top-32 z-0 text-[#4e31ad]/50 [mask-image:radial-gradient(circle,white,transparent)] dark:text-white/10">
  <svg aria-hidden="true" class="absolute inset-0 h-full w-full">
    <defs>
      <pattern
        id="customPattern"
        width="100"
        height="100"
        patternUnits="userSpaceOnUse"
      >
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#18003a" />
          <stop offset="50%" stop-color="#311b92" />
          <stop offset="100%" stop-color="#800027" />
        </linearGradient>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#customPattern)"></rect>
  </svg>
</div>
        <div className="relative z-10 max-w-xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            🧬{' '}
            <Link href="/start">
              <span
                className="border-b-4 hover:border-b-[5px]"
                style={{
                  borderImage:
                    'linear-gradient(to right, #5416d3 0%, #4f46e5 60%, #833aba 100%) 1',
                }}
              >
                Sapiens IA
              </span>
            </Link>{' '}
            Laboratories
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Estamos Construyendo La Nueva Generacion De Trabajadores, Inteligencias Artificiales y Autonomous Agents diseñados para el trabajo del mundo REAL.
          </p>
          <div className="mx-auto pt-8" style={{ backgroundImage: "url('https://raw.githubusercontent.com/Vortextech01/mintlify.com/main/public/static/images/blog/FE2B9339-EEBC-4476-9A0A-2C36E560D164.jpeg')" }}>
  <div className="grid grid-cols-4 gap-2 sm:grid-cols-5 sm:gap-4">
    {[
      ['YCombinator', logoYCombinator],
      ['Flatfile', logoFlatfile],
      ['Thanx', logoThanx],
      ['Depict', logoDepict],
      ['Sequence', logoSequence],
      ['MindsDB', logoMindsDB],
      ['ElevenLabs', logoElevenLabs],
      ['Resend', logoResend],
      ['Goody', logoGoody],
      ['LatchBio', logoLatchBio],
    ].map(([alt, logo]) => (
      <div className="col-span-1 flex justify-center dark:brightness-125 lg:col-span-1">
        <Image className="h-12" src={logo} alt={alt} />
      </div>
    ))}
  </div>
</div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {features.map((feature) => (
              <Feature key={feature.slug} feature={feature} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <FeaturedShowcases />
            <Newsletter />
          </div>
        </div>
      </Container>
    </>
  )
}
