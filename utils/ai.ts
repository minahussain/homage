import { OpenAI } from 'langchain/llms/openai'
import { StructuredOutputParser } from 'langchain/output_parsers'
import { PromptTemplate } from 'langchain/prompts'
import { z } from 'zod'

const parser = StructuredOutputParser.fromZodSchema(
    z.object({
        mood: z
            .string()
            .describe('the emotion behind making the archival post.'),
        subject: z
            .string()
            .describe(
                'the fashion subculture or descriptive personality and style of the archival post limited to 5 words maximum, for example: sporty detailed comfy.',
            ),
        color: z
            .string()
            .describe(
                'a hexidecimal color code that represents the emotion or mood. For example: #6CB4EE is a blue color that represents trust, sadness, or calmness.',
            ),
    }),
)

const getPrompt = async (content) => {
    const format_instructions = parser.getFormatInstructions()

    const prompt = new PromptTemplate({
        template:
            'Analyze the following fashion digital archive post, I want you to analyze it for a few things.. Follow the instructions and format your response to match the format instructions, no matter what! \n{format_instructions}\n{entry}',
        inputVariables: ['entry'],
        partialVariables: { format_instructions },
    })

    const input = await prompt.format({
        entry: content,
    })

    return input
}

export const analyze = async (content) => {
    const input = await getPrompt(content)
    const model = new OpenAI({ temperature: 1, modelName: 'gpt-3.5-turbo' })
    const result = await model.invoke(input)

    try {
        return parser.parse(result)
    } catch (e) {
        console.log(e)
    }
}
