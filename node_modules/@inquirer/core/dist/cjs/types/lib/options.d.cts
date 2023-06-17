import type { AsyncPromptConfig, ResolvedPromptConfig } from '../index.d.cts';
export declare function getPromptConfig<In extends AsyncPromptConfig>(option: In): Promise<In & ResolvedPromptConfig>;
