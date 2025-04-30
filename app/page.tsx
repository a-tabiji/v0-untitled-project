import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Menu, Instagram, Twitter, Facebook, ChevronDown } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* ヘッダー */}
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="At Ima Logo"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="text-xl font-bold">
              At Ima <span className="text-amber-500">あっといま</span>
            </span>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              特徴
            </Link>
            <Link href="#how" className="text-sm font-medium hover:text-primary">
              利用方法
            </Link>
            <Link href="#stakeholders" className="text-sm font-medium hover:text-primary">
              参加する
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </Link>
          </nav>

          {/* モバイルナビゲーショントグル */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">メニュー</span>
            </Button>
          </div>

          {/* CTAボタン */}
          <div className="hidden md:block">
            <Button>今すぐ予約</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* ヒーローセクション */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-amber-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    写真も思い出も、同時に残せる
                  </h1>
                  <p className="text-xl text-amber-600 font-medium">その場で瞬間を撮影するサービス</p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    At
                    Ima（あっといま）は、子育て中の20-30代家族を中心とした、アクティビティを楽しみながら思い出を残したい方向けの新しい写真サービス。体験に集中しながらも、その瞬間をプロのカメラマンが自然な形で残します。
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="px-8 bg-amber-500 hover:bg-amber-600">
                    サービスを知る
                  </Button>
                  <Button size="lg" variant="outline" className="px-8">
                    参加する
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://picsum.photos/seed/family1/550/550"
                  alt="公園で遊ぶ親子の自然な写真"
                  width={550}
                  height={550}
                  className="rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 課題セクション */}
        <section id="problems" className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl relative inline-block pb-3">
                  こんな悩みはありませんか？
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-amber-500"></span>
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
              {/* 課題1 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="h-48 w-full mb-4 overflow-hidden rounded-lg">
                    <Image
                      src="https://picsum.photos/seed/phone1/300/200"
                      alt="スマホで撮影に集中する親"
                      width={300}
                      height={200}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-bold">体験に集中できない</h3>
                  <p className="text-muted-foreground">
                    子どもと遊ぶ時間やデート、観光などのアクティビティと写真撮影を両立できず、いつも選択を迫られる
                  </p>
                </div>
              </div>

              {/* 課題2 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="h-48 w-full mb-4 overflow-hidden rounded-lg">
                    <Image
                      src="https://picsum.photos/seed/family2/300/200"
                      alt="家族写真で誰かが写っていない"
                      width={300}
                      height={200}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-bold">みんなで写真に写れない</h3>
                  <p className="text-muted-foreground">
                    いつも誰かがカメラマン役で、家族やグループ全員での写真が残せない
                  </p>
                </div>
              </div>

              {/* 課題3 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="h-48 w-full mb-4 overflow-hidden rounded-lg">
                    <Image
                      src="https://picsum.photos/seed/event1/300/200"
                      alt="特別な日だけの写真撮影"
                      width={300}
                      height={200}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-bold">日常の思い出が残せていない</h3>
                  <p className="text-muted-foreground">
                    既存の撮影サービスは予約必須で高額なため、特別なイベント以外の日々の何気ない瞬間や自然な表情が気軽に残せていない
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 特徴セクション */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl relative inline-block pb-3">
                  At Imaの3つの特徴
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-amber-500"></span>
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  日常の瞬間を、自然な形で思い出に残すための3つの特徴
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
              {/* 特徴1 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="h-48 w-full mb-4 overflow-hidden rounded-lg">
                    <Image
                      src="https://picsum.photos/seed/smartphone1/300/200"
                      alt="スマホで依頼するユーザー"
                      width={300}
                      height={200}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-4xl mb-2">⚡</div>
                  <h3 className="text-xl font-bold text-amber-600">すぐ撮影</h3>
                  <p className="text-muted-foreground">
                    スマホから依頼して5分以内にカメラマンが到着。予約不要で思い立った時にすぐ利用できます。
                  </p>
                </div>
              </div>

              {/* 特徴2 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="h-48 w-full mb-4 overflow-hidden rounded-lg">
                    <Image
                      src="https://picsum.photos/seed/family3/300/200"
                      alt="家族全員で体験を楽しむ様子"
                      width={300}
                      height={200}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-4xl mb-2">👪</div>
                  <h3 className="text-xl font-bold text-amber-600">体験重視</h3>
                  <p className="text-muted-foreground">
                    撮影はプロに任せて、家族全員で体験を楽しめます。カメラを意識せず、自然な表情を残せます。
                  </p>
                </div>
              </div>

              {/* 特徴3 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="h-48 w-full mb-4 overflow-hidden rounded-lg">
                    <Image
                      src="https://picsum.photos/seed/money1/300/200"
                      alt="手軽に利用できる料金設定"
                      width={300}
                      height={200}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-4xl mb-2">💸</div>
                  <h3 className="text-xl font-bold text-amber-600">手軽さ</h3>
                  <p className="text-muted-foreground">
                    20分3,500円という明確な料金設定。予約不要で気軽に利用可能です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 利用の流れセクション */}
        <section id="how" className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl relative inline-block pb-3">
                  サービスの利用方法
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-amber-500"></span>
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  簡単4ステップで、すぐに思い出が残せます
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-4 relative">
              {/* ステップ間の線（デスクトップのみ） */}
              <div className="hidden md:block absolute top-[72px] left-[60px] w-[calc(100%-120px)] h-0.5 bg-amber-300 z-0"></div>

              {/* ステップ1 */}
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white font-bold text-xl mb-4">
                  1
                </div>
                <div className="h-32 w-32 mb-4 overflow-hidden rounded-full border-4 border-white shadow-md">
                  <Image
                    src="https://picsum.photos/seed/step1/150/150"
                    alt="スマホから依頼"
                    width={150}
                    height={150}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">依頼</h3>
                <p className="text-sm text-muted-foreground">スマホから撮影依頼</p>
              </div>

              {/* ステップ2 */}
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white font-bold text-xl mb-4">
                  2
                </div>
                <div className="h-32 w-32 mb-4 overflow-hidden rounded-full border-4 border-white shadow-md">
                  <Image
                    src="https://picsum.photos/seed/step2/150/150"
                    alt="カメラマン到着"
                    width={150}
                    height={150}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">到着</h3>
                <p className="text-sm text-muted-foreground">5分以内にカメラマン到着</p>
              </div>

              {/* ステップ3 */}
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white font-bold text-xl mb-4">
                  3
                </div>
                <div className="h-32 w-32 mb-4 overflow-hidden rounded-full border-4 border-white shadow-md">
                  <Image
                    src="https://picsum.photos/seed/step3/150/150"
                    alt="自然な撮影"
                    width={150}
                    height={150}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">撮影</h3>
                <p className="text-sm text-muted-foreground">20分の自然な撮影</p>
              </div>

              {/* ステップ4 */}
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white font-bold text-xl mb-4">
                  4
                </div>
                <div className="h-32 w-32 mb-4 overflow-hidden rounded-full border-4 border-white shadow-md">
                  <Image
                    src="https://picsum.photos/seed/step4/150/150"
                    alt="データ共有"
                    width={150}
                    height={150}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">共有</h3>
                <p className="text-sm text-muted-foreground">その日のうちにデータ共有</p>
              </div>
            </div>
          </div>
        </section>

        {/* 写真ギャラリーセクション */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl relative inline-block pb-3">
                  撮影イメージ
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-amber-500"></span>
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">At Imaで撮影された自然な瞬間の数々</p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="https://picsum.photos/seed/gallery1/300/400"
                      alt="公園で遊ぶ親子"
                      width={300}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="https://picsum.photos/seed/gallery2/300/300"
                      alt="砂場で遊ぶ子ども"
                      width={300}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="https://picsum.photos/seed/gallery3/300/300"
                      alt="水族館での家族"
                      width={300}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="https://picsum.photos/seed/gallery4/300/400"
                      alt="ピクニックを楽しむ家族"
                      width={300}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="https://picsum.photos/seed/gallery5/300/400"
                      alt="動物園での親子"
                      width={300}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="https://picsum.photos/seed/gallery6/300/300"
                      alt="ぶどう狩りをするカップル"
                      width={300}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 声のセクション */}
        <section id="voices" className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl relative inline-block pb-3">
                  ご利用者の声
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-amber-500"></span>
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">At Imaを通じて生まれる新しい体験</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {/* 声1 */}
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src="https://picsum.photos/seed/user1/100/100"
                      alt="2歳のお子さまのママ"
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">2歳のお子さまのママ</p>
                    <div className="flex text-amber-500">
                      <span>★★★★★</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  「月に一度は必ずこの公園に来ています。自然な家族写真が撮れるだけでなく、子どもの成長と共にこの公園での思い出がたくさん増えていくのが嬉しいですね。将来、子どもと一緒にアルバムを見返すのが今から楽しみです。」
                </p>
              </div>

              {/* 声2 */}
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src="https://picsum.photos/seed/user2/100/100"
                      alt="3歳のお子さまのママ"
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">3歳のお子さまのママ</p>
                    <div className="flex text-amber-500">
                      <span>★★★★★</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  「この水族館には特別な思い出があります。私が小さい頃によく連れてきてもらった思い出の場所で、今度は娘と一緒に。しかも自然な姿を写真に残せるなんて。いつか孫ができたら、また一緒に来られたらいいなって思います。三世代の思い出の場所になれたら素敵ですよね。」
                </p>
              </div>

              {/* 声3 */}
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src="https://picsum.photos/seed/user3/100/100"
                      alt="カップル・20代後半"
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">カップル・20代後半</p>
                    <div className="flex text-amber-500">
                      <span>★★★★★</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  「彼女との記念日に、山梨のぶどう狩りに来ました。二人で写真を撮ろうとすると片方しか写らないか、自撮り棒で不自然な写真になってしまいます。でもこのサービスのおかげで、ぶどうを選んでいる自然な様子や、二人の笑顔を素敵に残せました。思い出作りに最適です。」
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ステークホルダーセクション */}
        <section id="stakeholders" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl relative inline-block pb-3">
                  At Imaに参加する
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-amber-500"></span>
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  さまざまな形で、新しい思い出づくりにご参加いただけます
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl py-12">
              <Tabs defaultValue="users" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="users">ご利用者</TabsTrigger>
                  <TabsTrigger value="photographers">カメラマン</TabsTrigger>
                  <TabsTrigger value="locations">場所提供者</TabsTrigger>
                </TabsList>

                <TabsContent value="users">
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">ご利用者の皆様へ</h3>
                        <p className="text-muted-foreground mb-6">
                          At
                          Imaでは、特別な日だけでなく日常の思い出も気軽に残せる新しい写真サービスを提供しています。モニターとして参加いただき、サービスの改善にご協力ください。
                        </p>
                      </div>
                      <div className="rounded-lg overflow-hidden">
                        <Image
                          src="https://picsum.photos/seed/users1/500/300"
                          alt="家族で楽しむ様子"
                          width={500}
                          height={300}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mt-8">
                      <div className="rounded-lg border bg-background p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-amber-100 p-2">
                            <div className="text-2xl">🎭</div>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold">自然な表情が残せる</h4>
                            <p className="text-sm text-muted-foreground">
                              カメラを気にせず、子どもとの体験に集中できるため、より自然な表情や瞬間を写真に残せます。
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border bg-background p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-amber-100 p-2">
                            <div className="text-2xl">👨‍👩‍👧</div>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold">家族全員で写真に</h4>
                            <p className="text-sm text-muted-foreground">
                              誰かがカメラを持つ必要がないため、家族全員が写真に写ることができます。
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border bg-background p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-amber-100 p-2">
                            <div className="text-2xl">📆</div>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold">日常の思い出作り</h4>
                            <p className="text-sm text-muted-foreground">
                              特別なイベントだけでなく、日常のかけがえのない瞬間も残すことができます。
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border bg-background p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-amber-100 p-2">
                            <div className="text-2xl">⏱️</div>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold">時間の節約</h4>
                            <p className="text-sm text-muted-foreground">
                              写真撮影の手間から解放され、家族との時間に集中できます。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center mt-8">
                      <Button className="bg-amber-500 hover:bg-amber-600">モニターに応募する</Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="photographers">
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">カメラマンの皆様へ</h3>
                        <p className="text-muted-foreground mb-6">
                          At
                          Imaでは、写真の技術を持つ方々が活躍できる場を提供しています。写真専門学校生や見習いカメラマンとして、家族写真はもちろん、カップルや友人グループなど様々なシーンでの実践的な経験を積みながら収入を得られます。
                        </p>
                      </div>
                      <div className="rounded-lg overflow-hidden">
                        <Image
                          src="https://picsum.photos/seed/photographer1/500/300"
                          alt="カメラマンの活動"
                          width={500}
                          height={300}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mt-8">
                      <div className="rounded-lg border bg-background p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-amber-100 p-2">
                            <div className="text-2xl">💰</div>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold">収入機会の創出</h4>
                            <p className="text-sm text-muted-foreground">
                              自分の都合に合わせて働けるフレキシブルな働き方で、スキルを活かした収入が得られます。
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border bg-background p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-amber-100 p-2">
                            <div className="text-2xl">📸</div>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold">実践的な撮影経験</h4>
                            <p className="text-sm text-muted-foreground">
                              実際の顧客を相手に、様々なシチュエーションでの撮影経験を積むことができます。
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border bg-background p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-amber-100 p-2">
                            <div className="text-2xl">📊</div>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold">ポートフォリオの構築</h4>
                            <p className="text-sm text-muted-foreground">
                              家族写真のポートフォリオを構築でき、カメラマンとしてのキャリア形成に役立ちます。
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border bg-background p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-amber-100 p-2">
                            <div className="text-2xl">🤝</div>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold">コミュニティへの参加</h4>
                            <p className="text-sm text-muted-foreground">
                              同じ志を持つカメラマン同士のコミュニティに参加でき、スキルや知識を共有できます。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center mt-8">
                      <Button className="bg-rose-500 hover:bg-rose-600">カメラマンに応募する</Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="locations">
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">場所提供者の皆様へ</h3>
                        <p className="text-muted-foreground mb-6">
                          At
                          Imaでは、公園、水族館、動物園、観光施設、農園、飲食店などの施設と提携し、新しい来場動機の創出と施設の魅力向上を支援します。様々な場面での思い出づくりをサポートします。
                        </p>
                      </div>
                      <div className="rounded-lg overflow-hidden">
                        <Image
                          src="https://picsum.photos/seed/location1/500/300"
                          alt="提携施設のイメージ"
                          width={500}
                          height={300}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mt-8">
                      <div className="rounded-lg border bg-background p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-amber-100 p-2">
                            <div className="text-2xl">🏞️</div>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold">来場動機の創出</h4>
                            <p className="text-sm text-muted-foreground">
                              自然な写真を撮影できる場所として認知され、家族連れやカップルなど新たな来場者層を獲得できます。
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border bg-background p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-amber-100 p-2">
                            <div className="text-2xl">🔄</div>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold">リピーター増加</h4>
                            <p className="text-sm text-muted-foreground">
                              思い出の場所として定期的に訪れるリピーターが増え、継続的な来場者確保につながります。
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border bg-background p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-amber-100 p-2">
                            <div className="text-2xl">💡</div>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold">施設の魅力向上</h4>
                            <p className="text-sm text-muted-foreground">
                              家族向けサービスの充実により、施設の魅力と顧客満足度が向上します。
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border bg-background p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-amber-100 p-2">
                            <div className="text-2xl">👶</div>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold">世代を超えた価値創造</h4>
                            <p className="text-sm text-muted-foreground">
                              家族の思い出の場所として世代を超えた価値を提供し、長期的な施設の価値向上につながります。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center mt-8">
                      <Button>提携の相談をする</Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* よくある質問セクション */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl relative inline-block pb-3">
                  よくある質問
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-amber-500"></span>
                </h2>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-6 py-12">
              <div className="rounded-lg border bg-white p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">どんな場所で利用できますか？</h3>
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="mt-2 text-muted-foreground">
                  公園や水族館、動物園など、公共の場所であればご利用いただけます。一部施設では提携を行い、スムーズにご利用いただける場所も順次拡大中です。
                </div>
              </div>

              <div className="rounded-lg border bg-white p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">写真はいつ受け取れますか？</h3>
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="mt-2 text-muted-foreground">
                  基本的には当日中、遅くとも翌日には厳選した写真データをお届けします。オンラインでの共有になります。
                </div>
              </div>

              <div className="rounded-lg border bg-white p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">予約は必要ですか？</h3>
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="mt-2 text-muted-foreground">
                  予約は不要です。その場でスマートフォンから依頼いただけます。ただし、カメラマンの稼働状況によってはお待ちいただく場合があります。
                </div>
              </div>

              <div className="rounded-lg border bg-white p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">料金はどのようになっていますか？</h3>
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="mt-2 text-muted-foreground">
                  基本料金は20分3,500円です。明確な料金設定で、追加料金などは発生しません。
                </div>
              </div>

              <div className="rounded-lg border bg-white p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">子どもがいない家族やカップルでも利用できますか？</h3>
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="mt-2 text-muted-foreground">
                  もちろんご利用いただけます。カップルのデート、友人同士の旅行、農業体験など、様々なシーンで体験と写真撮影を両立したい方にご活用いただけます。
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTAセクション */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">At Imaに参加しませんか？</h2>
                <p className="max-w-[900px] md:text-xl">
                  At
                  Imaは現在、サービスの価値検証のために、モニターユーザー、カメラマン、提携施設を募集しています。新しい思い出づくりの形に、あなたもぜひご参加ください。
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
                  モニターに応募する
                </Button>
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                  カメラマンに応募する
                </Button>
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  提携の相談をする
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="w-full border-t py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="At Ima Logo"
                  width={32}
                  height={32}
                  className="rounded"
                />
                <span className="text-xl font-bold">
                  At Ima <span className="text-amber-500">あっといま</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                子育て世代の新しい思い出作りをサポートします。日常の何気ない瞬間も、家族みんなで楽しみながら残せる、新しい写真体験を。
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-amber-500">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-amber-500">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-amber-500">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">サービス</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-sm text-muted-foreground hover:text-amber-500">
                    特徴
                  </Link>
                </li>
                <li>
                  <Link href="#how" className="text-sm text-muted-foreground hover:text-amber-500">
                    利用方法
                  </Link>
                </li>
                <li>
                  <Link href="#voices" className="text-sm text-muted-foreground hover:text-amber-500">
                    利用者の声
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">参加する</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#stakeholders" className="text-sm text-muted-foreground hover:text-amber-500">
                    モニター応募
                  </Link>
                </li>
                <li>
                  <Link href="#stakeholders" className="text-sm text-muted-foreground hover:text-amber-500">
                    カメラマン応募
                  </Link>
                </li>
                <li>
                  <Link href="#stakeholders" className="text-sm text-muted-foreground hover:text-amber-500">
                    施設提携
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">お問い合わせ</h3>
              <p className="text-sm text-muted-foreground">
                A-Tabiji合同会社
                <br />
                東京都世田谷区
                <br />
                info@at-ima.jp
              </p>
            </div>
          </div>
          <div className="mt-8 border-t pt-8">
            <p className="text-xs text-muted-foreground text-center">
              &copy; {new Date().getFullYear()} A-Tabiji合同会社 All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
