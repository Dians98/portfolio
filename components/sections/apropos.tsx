import CountUp from 'react-countup';

export default function APropos() {
    return (
        <section id="apropos" className="py-6 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="flex flex-col gap-1">
                    <h1 className="text-primary font-medium"> A PROPOS</h1>
                    <h1 className="text-foreground font-bold sm:text-3xl md:text-4xl lg:text-4xl">Qui suis-je ?</h1>
                    <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorem debitis ea ex animi accusantium, velit quidem laboriosam odit natus veniam facilis dolore possimus modi inventore nisi labore sit commodi!</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">

                    <div className="flex flex-col items-center justify-center p-6 rounded-2xl border  text-center hover:border-primary/50 transition-colors">
                        <span className="text-3xl lg:text-4xl font-bold text-primary">+3 ans</span>
                        <span className="text-sm text-slate-400 mt-1">Expérience</span>
                    </div>


                    <div className="flex flex-col items-center justify-center p-6 rounded-2xl border  text-center hover:border-primary/50 transition-colors">
                        <span className="text-3xl lg:text-4xl font-bold text-primary">+20</span>
                        <span className="text-sm text-slate-400 mt-1">Projets</span>
                    </div>


                    <div className="flex flex-col items-center justify-center p-6 rounded-2xl border  text-center hover:border-primary/50 transition-colors">
                        <span className="text-3xl lg:text-4xl font-bold text-primary">+15</span>
                        <span className="text-sm text-slate-400 mt-1">Technologies</span>
                    </div>

                    <div className="flex flex-col items-center justify-center p-6 rounded-2xl border  text-center hover:border-primary/50 transition-colors">
                        <span className="text-3xl lg:text-4xl font-bold text-primary">+10</span>
                        <span className="text-sm text-slate-400 mt-1">Clients</span>
                    </div>


                </div>


            </div>


        </section>

    );
}
