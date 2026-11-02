/** Plain-English summaries for report pages. Specific points are examples, not a mandatory checklist. */
export type ReportPageCopy={intro:string;points:string[];note?:string};
export const reportCopy:Record<string,ReportPageCopy>={
  "post-traumatic-stress-disorder": {
    "intro": "Reports on PTSD and other mental health problems following trauma.",
    "points": [
      "Whether the symptoms fit a diagnosis of PTSD.",
      "Whether the reported event may have caused or worsened the symptoms.",
      "How the symptoms affect work and daily life.",
      "Treatment and likely recovery."
    ]
  },
  "anxiety-depression": {
    "intro": "Reports on anxiety, depression and their effect on daily life.",
    "points": [
      "Whether the symptoms meet the criteria for a psychiatric diagnosis.",
      "When the problems began and whether there were earlier difficulties.",
      "How the symptoms affect work, relationships and everyday life.",
      "Treatment and likely recovery."
    ]
  },
  "addiction-psychiatry": {
    "intro": "Reports involving alcohol or drug dependence and related mental health problems.",
    "points": [
      "Alcohol or drug use and whether dependence is present.",
      "Any other mental health problems.",
      "How these difficulties affect daily life.",
      "Treatment, recovery and the risk of relapse."
    ]
  },
  "chronic-pain-psychological-injury": {
    "intro": "Reports on mental health problems linked to injury or long-term pain.",
    "points": [
      "Whether anxiety, depression or another psychiatric condition is present.",
      "How pain and mental health symptoms affect each other.",
      "The effect on work and everyday life.",
      "Treatment and likely recovery."
    ]
  },
  "personality-adjustment-disorders": {
    "intro": "Reports on long-standing personality difficulties and mental health problems following stressful events.",
    "points": [
      "Whether a psychiatric diagnosis is supported by the evidence.",
      "Whether difficulties were present before the event in question.",
      "How symptoms affect relationships, work and everyday life.",
      "Treatment and likely outlook."
    ]
  },
  "personal-injury-clinical-negligence": {
    "intro": "Psychiatric reports for cases involving injuries or concerns about medical care.",
    "points": [
      "Whether a psychiatric injury has occurred.",
      "Whether the event or treatment may have caused or worsened it.",
      "The effect on work and everyday life.",
      "Treatment and likely recovery."
    ]
  },
  "employment-occupational-matters": {
    "intro": "Psychiatric reports for workplace disputes and cases involving mental health at work.",
    "points": [
      "Whether there is a psychiatric condition.",
      "How it affects work and everyday life.",
      "The role of workplace events and any earlier mental health problems.",
      "Treatment and likely recovery."
    ]
  },
  "professional-regulation": {
    "intro": "Psychiatric reports for professional regulators and fitness-to-practise cases.",
    "points": [
      "Whether there is a psychiatric condition.",
      "Any treatment and how the person is managing.",
      "The possible effect of the condition on their work.",
      "Any relevant mental health risks."
    ],
    "note": "The regulator, not the psychiatrist, makes the final decision."
  },
  "glasgow": {
    "intro": "Dr Qureshi is a consultant psychiatrist based in Glasgow. He prepares independent reports for legal and professional cases.",
    "points": [
      "Personal injury and trauma.",
      "Anxiety, depression and addiction.",
      "Workplace and professional regulation cases."
    ],
    "note": "Contact him to ask about a case, fees and timing."
  },
  "edinburgh": {
    "intro": "Dr Qureshi is based in Glasgow and also considers cases involving Edinburgh.",
    "points": [
      "Personal injury and trauma.",
      "Anxiety, depression and addiction.",
      "Workplace and professional regulation cases."
    ],
    "note": "He does not have an Edinburgh office. Ask about assessment arrangements before instructing."
  }
};
