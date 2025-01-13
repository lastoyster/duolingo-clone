import type { PropsWithChildren } from "react";

const LessonLayout =({children}: PropsWithChildren) => {
    return(
        <div className="lesson-layout"</div>
     <div className="flex h-full flex-col">{children}</div>
        );
};

export default LessonLayout;